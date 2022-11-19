import React from 'react'
import Link from 'next/link'

import visa from './../../public/images/kartice/visa1.png'
import master from './../../public/images/kartice/Master_Card.png'
import dina from './../../public/images/kartice/dina-card.png'
import express from './../../public/images/kartice/a-e.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer max-width'>
          <div className='jugo-info'>
            <div className='jugo-adresa'>
              <h4>Adresa</h4>
              <p>Kneza Miloša 81, 35210 Svilajnac</p>
              <p>Novosadska 634, 21235 Temerin</p>
              <p>Beogradski put 17/A, 12000 Požarevac</p>
            </div>

            <div className='jugo-mail'>
              <h4>E-mail</h4>
              <a href='mailto:info@jugometal.co.rs'>info@jugometal.co.rs</a>
            </div>

            <div className='jugo-phone'>
              <h4>Telefon</h4>
              <p>Svilajnac: 035/312-391</p>
              <p>Temerin: 021/840-038</p>
              <p>Požarevac: 012/665-544</p>
            </div>

            <div className='jugo-face'>
              <h4>Facebook</h4>
              <a href='https://facebook.com/jugometal' className='facebook'>
                Jugometa DOO Svilajnac
              </a>
            </div>
          </div>

          <div className='jugo-pages '>
            <div className='page-servis'>
              <h4>Servis</h4>
              <Link href='/servis'>Originalni delovi, servisiranje</Link>
            </div>

            <div className='page-about'>
              <h4>Jugometal</h4>
              <Link href='/o-nama'>O Nama</Link>
            </div>

            <div className='page-finansiranje'>
              <h4>Finansiranje</h4>
              <Link href='/finansiranje'>
                Obnovite poljoprivrednu mehanizaciju
              </Link>
            </div>

            <div className='page-kontakt'>
              <h4>Kontakt</h4>
              <Link href='/kontakt'>Kontaktirajte nas</Link>
            </div>

            {/* <div className='prodavnica'>
              <h4>Rezervni delovi</h4>
              <Link href='/delovi'>
                Poručite originalne rezervne delove iz naše online prodavnice
              </Link>
            </div> */}

            <div className='page-akcija'>
              <h4>Rezervni delovi</h4>
              <Link href='/delovi'>
                Poručite originalne rezervne delove iz naše online prodavnice
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className='credits'>
        <div className='credit-cards'>
          <div className='credit-card-img'>
            <Image
              src={visa}
              alt={'Visa credit card'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition='center'
            />
          </div>
          <div className='credit-card-img'>
            <Image
              src={master}
              alt={'Master credit card'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition='center'
            />
          </div>
          <div className='credit-card-img'>
            <Image
              src={dina}
              alt={'Dina credit card'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition='center'
            />
          </div>
          <div className='credit-card-img'>
            <Image
              src={express}
              alt={'Express credit card'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition='center'
            />
          </div>
        </div>
        <p>© 2022 Jugometal d.o.o. Sva prava zadržana.</p>
      </div>
    </div>
  )
}

export default Footer
