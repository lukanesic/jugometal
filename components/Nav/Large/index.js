import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { BsSearch } from 'react-icons/bs'

import { useSession, signOut } from 'next-auth/react'

import { useSelector } from 'react-redux'

const Large = ({
  openSearch,
  setOpenSearch,
  openDmenu,
  setOpenDmenu,
  open,
  setOpen,
}) => {
  // simulacija
  const [isLogged, setIsLogged] = useState(false)

  const { data: session, status } = useSession()
  const [domLoaded, setDomLoaded] = useState(false)

  const { cartTotalQuantity } = useSelector((state) => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <nav>
      <div className='max-width'>
        <div className='nav-wrapper'>
          <div className='contact-info'>
            <a href='https://facebook.com/jugometal' className='facebook'>
              <FaFacebookF
                className='facebook'
                href='https://facebook.com/jugometal'
                target='_blank'
                rel='noopener noreferrer'
              />
            </a>

            <a href='tel:+38135312391' className='phone'>
              035/312-391
            </a>
            <a href='mailto: info@jugometal.co.rs' className='email'>
              info@jugometal.co.rs
            </a>
          </div>

          {/* Ne vise od 3 */}
          <div className='navigation'>
            <div
              style={{
                display: 'flex',
                marginRight: '3rem',
              }}
            >
              {session && <Link href='/admin'>Admin</Link>}

              <BsSearch
                className='nav-icon'
                onClick={() => setOpenSearch(!openSearch)}
              />
              {/* 
              <h3
                style={{
                  fontWeight: '300',
                  cursor: 'pointer',
                  marginLeft: '.5rem',
                  fontSize: '1rem',
                }}
                onClick={() => setOpenSearch(!openSearch)}
              >
                Pretraga
              </h3> */}
            </div>

            {/* <GiHamburgerMenu className='nav-icon' /> */}

            {/* <h3
              style={{
                fontWeight: '300',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => setOpenDmenu(!openDmenu)}
              // onClick={() => console.log('d')}
            >
              Menu
            </h3> */}

            {/* <h3
              style={{
                fontWeight: '300',
                fontSize: '.9rem',
              }}
            >
              Kneza Miloša 81, Svilajnac
            </h3> */}

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
                className='nav-icon'
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Large
