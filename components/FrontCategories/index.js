import React from 'react'
import Link from 'next/link'

const FrontCategories = () => {
  return (
    <div className='categories-wrapper'>
      <div className='categories-left'>
        <div className='cat-tract'>
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
            <div className='cat-info'>
              <h2>Ratarstvo</h2>
              <p>Pogledajte našu ponudu ratarskih poljoprivrednih mašina</p>
              <Link href='/ratarstvo'>Detaljnije</Link>
            </div>
          </div>

          <div className='cat-vocar'>
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
          <div className='cat-info'>
            <h2>Stočarstvo</h2>
            <p>Izaberite iz naše ponude mašina namenjene stočarstvu</p>
            <Link href='/stocarstvo'>Detaljnije</Link>
          </div>
        </div>

        <div className='cat-transport'>
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
