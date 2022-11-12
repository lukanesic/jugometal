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
        <Link href='/stocarstvo'>
          <li>Stocarstvo</li>
        </Link>
        <Link href='/vocarstvo'>
          <li>Vocarstvo</li>
        </Link>
        <Link href='/transport'>
          <li>Transport</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
