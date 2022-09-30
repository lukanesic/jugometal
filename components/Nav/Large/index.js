import React, { useState } from 'react'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'

import { BsSearch } from 'react-icons/bs'

import { useSession, signOut } from 'next-auth/react'

const Large = ({ openSearch, setOpenSearch, openDmenu, setOpenDmenu }) => {
  // simulacija
  const [isLogged, setIsLogged] = useState(false)

  const { data: session, status } = useSession()

  return (
    <nav>
      <div className='max-width'>
        <div className='nav-wrapper'>
          <div className='contact-info'>
            <a href='https://facebook.com/jugometal' className='facebook'>
              <FaFacebookF
                className='facebook'
                href='https://facebook.com/jugometal'
              />
            </a>
            <a href='tel:+38135312391' className='phone'>
              035/312-391
            </a>
            <a href='mailto:jugometal.co.rs' className='email'>
              jugometal@gmail.co.rs
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
              </h3>
            </div>

            {/* <GiHamburgerMenu className='nav-icon' /> */}

            <h3
              style={{
                fontWeight: '300',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => setOpenDmenu(!openDmenu)}
              // onClick={() => console.log('d')}
            >
              Menu
            </h3>

            {/* <AiOutlineShoppingCart
              className='nav-icon'
              onClick={() => setOpen(!open)}
            /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Large
