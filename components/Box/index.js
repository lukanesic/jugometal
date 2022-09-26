import React from 'react'
import Link from 'next/link'

const Box = ({ brandTitle, brandDescription, link }) => {
  return (
    <div className='box'>
      <h2>{brandTitle}</h2>
      <div className='box-brands'>
        <p>{brandDescription}</p>
      </div>
      <Link href={link}>Detaljnije</Link>
    </div>
  )
}

export default Box
