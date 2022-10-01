import React from 'react'
import Link from 'next/link'

import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from './../../../public/images/jugometal-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SideMenu from '../../Menus/SideMenu'

const Small = ({
  openSideM,
  setOpenSideM,
  openTopC,
  setOpenTopC,
  openSearch,
  setOpenSearch,
}) => {
  const router = useRouter()

  return (
    <nav className='sm-nav'>
      <div className='sm-nav-logo'>
        <Link href='/'>
          {/* LOGO img */}
          <div className='small-logo' onClick={() => router.replace('/')}>
            <Image
              src={logo}
              alt={'Jugometal Logo'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition='center'
              style={{ zIndex: '-10' }}
            />
          </div>
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
