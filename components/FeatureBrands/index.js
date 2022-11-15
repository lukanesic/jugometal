import Image from 'next/image'
import React from 'react'

import Carraro from './../../public/images/banners/carraro.jpeg'
import Deere from './../../public/images/banners/jd.webp'
import { useRouter } from 'next/router'

const FeatureBrands = () => {
  const router = useRouter()

  return (
    <div className='brand-wrapper'>
      <div
        className='brand-jd'
        onClick={() => router.push('/traktori/john-deere')}
      >
        <Image
          src={Deere}
          alt='John Deere Banner'
          layout='fill'
          objectFit='cover'
          style={{ zIndex: '-10' }}
        />
        <div className='categorie-info'>
          <h2>John Deere</h2>
          <p>
            Proizvodi poljoprivrednu mehanizaciju, tešku opremu, mehanizaciju za
            šumarstvo, dizel motore
          </p>
        </div>
      </div>
      <div
        className='brand-carr'
        onClick={() => router.push('/traktori/carraro')}
      >
        <Image
          src={Carraro}
          alt='Carraro Banner'
          layout='fill'
          objectFit='cover'
          style={{ zIndex: '-10' }}
        />
        <div className='categorie-info'>
          <h2>Carraro</h2>
          <p>
            Proizvodi standardne traktore i specijalne traktore za vinograde i
            voćnjake od 55-95 KS
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureBrands
