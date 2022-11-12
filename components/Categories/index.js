import Image from 'next/image'
import React from 'react'

import TractorImg from './../../public/images/banners/tr2.jpg'
import RatImg from './../../public/images/banners/rat.jpg'
import VocImg from './../../public/images/banners/voc.jpg'
import StocImg from './../../public/images/banners/stoc.jpg'
import TransImg from './../../public/images/banners/transport.jpg'

const Categories = () => {
  return (
    <div className='category-wrapper'>
      <div className='cat-left'>
        <div className='cat-tr'>
          <Image
            src={TractorImg}
            alt='Tractor Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='categorie-info'>
            <h2>Traktori</h2>
            <p>Izaberite traktor koji odgovara vašim potrebama</p>
          </div>
        </div>
        <div className='cat-stoc'>
          <Image
            src={StocImg}
            alt='Stocarstvo Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='categorie-info'>
            <h2>Stočarstvo</h2>
            <p>Izaberite iz naše ponude mašina namenjene stočarstvu</p>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}
      <div className='cat-right'>
        <div className='cat-rat'>
          <Image
            src={RatImg}
            alt='Ratarstvo Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='categorie-info'>
            <h2>Ratarstvo</h2>
            <p>Izaberite iz naše ponude mašina namenjene ratarstvu</p>
          </div>
        </div>
        <div className='cat-voc'>
          <Image
            src={VocImg}
            alt='Vocarstvo Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='categorie-info'>
            <h2>Voćarstvo</h2>
            <p>Izaberite iz naše ponude mašina namenjene vocarstvu</p>
          </div>
        </div>

        <div className='cat-tran'>
          <Image
            src={TransImg}
            alt='Transport Banner'
            layout='fill'
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
          <div className='categorie-info'>
            <h2>Transport</h2>
            <p>Izaberite iz naše ponude mašina namenjene transportu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
