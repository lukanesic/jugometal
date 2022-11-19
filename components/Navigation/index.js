import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='d-nav'>
      <ul>
        <Link href='/delovi'>
          <li>Rezervni delovi</li>
        </Link>
        <Link href='/o-nama'>
          <li>O nama</li>
        </Link>
        <Link href='/finansiranje'>
          <li>Finansiranje</li>
        </Link>
        <Link href='/servis'>
          <li>Servis</li>
        </Link>
        <Link href='/kontakt'>
          <li>Kontakt</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
