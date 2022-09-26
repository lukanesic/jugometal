import React, { useState } from 'react'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'

import { BsSearch } from 'react-icons/bs'

import { GiHamburgerMenu } from 'react-icons/gi'

const Large = ({ open, setOpen, openSearch, setOpenSearch }) => {
  // simulacija
  const [isLogged, setIsLogged] = useState(false)

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
            {isLogged && <Link href='/profile'>Profil</Link>}
            <BsSearch
              className='nav-icon'
              onClick={() => setOpenSearch(!openSearch)}
            />

            <h3
              style={{ fontWeight: '300', cursor: 'pointer' }}
              onClick={() => setOpenSearch(!openSearch)}
            >
              Pretraga
            </h3>

            <GiHamburgerMenu className='nav-icon' />

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
