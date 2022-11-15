import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='d-nav'>
      <ul>
        <Link href='/traktori'>
          <li>Traktori</li>
        </Link>
        <Link href='/ratarstvo'>
          <li>Ratarstvo</li>
        </Link>
        <Link href='/stočarstvo'>
          <li>Stočarstvo</li>
        </Link>
        <Link href='/voćarstvo'>
          <li>Voćarstvo</li>
        </Link>
        <Link href='/transport'>
          <li>Transport</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
