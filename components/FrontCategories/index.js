import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import TractorImg from './../../public/images/banners/tr2.jpg'
import RatImg from './../../public/images/banners/rat.jpg'
import VocImg from './../../public/images/banners/voc.jpg'
import StocImg from './../../public/images/banners/stoc.jpg'
import TransImg from './../../public/images/banners/transport.jpg'

const FrontCategories = () => {
  return (
    <div className='categories-wrapper'>
      <div className='categories-left'>
        <div className='cat-tract'>
          <Image
            src={TractorImg}
            alt='Tractor Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='cat-info'>
            <h2>Traktori</h2>
            <p>
              Izaberite traktor iz naše ponude koji odgovara Vašim potrebama
            </p>
            <Link href='/traktori'>Detaljnije</Link>
          </div>
        </div>

        <div className='categories-half-div'>
          <div className='cat-ratar'>
            <Image
              src={RatImg}
              alt='Ratarstvo Banner'
              layout='fill'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
            <div className='cat-info'>
              <h2>Ratarstvo</h2>
              <p>Pogledajte našu ponudu ratarskih poljoprivrednih mašina</p>
              <Link href='/ratarstvo'>Detaljnije</Link>
            </div>
          </div>

          <div className='cat-vocar'>
            <Image
              src={VocImg}
              alt='Vocarstvo Banner'
              layout='fill'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
            <div className='cat-info'>
              <h2>Voćarstvo</h2>
              <p>Poljoprivredne mašine koje su namenjene voćarstvu</p>
              <Link href='/vocarstvo'>Detaljnije</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='categories-right'>
        <div className='cat-stocar'>
          <Image
            src={StocImg}
            alt='Stocarstvo Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='cat-info'>
            <h2>Stočarstvo</h2>
            <p>Izaberite iz naše ponude mašina namenjene stočarstvu</p>
            <Link href='/stocarstvo'>Detaljnije</Link>
          </div>
        </div>

        <div className='cat-transport'>
          <Image
            src={TransImg}
            alt='Transport Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='cat-info'>
            <h2>Transport</h2>
            <p>
              Veliki izbor prikolica, cisterna, mix-prikolica i rasturača
              stajnjaka
            </p>
            <Link href='/transport'>Detaljnije</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontCategories
