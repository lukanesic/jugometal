import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from './../../../public/images/jugometal-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'

const Small = ({
  openSideM,
  setOpenSideM,
  openTopC,
  setOpenTopC,
  openSearch,
  setOpenSearch,
}) => {
  const router = useRouter()
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {domLoaded && (
            <p
              style={{
                marginRight: '.2rem',
                fontWeight: '500',
                color: 'red',
              }}
            >
              ( {cartTotalQuantity} )
            </p>
          )}
          <AiOutlineShoppingCart
            className='sm-i'
            onClick={() => setOpenTopC(!openTopC)}
          />
        </div>

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
