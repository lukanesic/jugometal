import React from 'react'
import Link from 'next/link'

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

            {/* <div className='page-kontakt'>
              <h4>Kontakt</h4>
              <Link href='/kontakt'>Kako doći do nas</Link>
            </div>

            <div className='prodavnica'>
              <h4>Prodavnica</h4>
              <Link href='/rezervni-delovi'>
                Poručite rezervne delove iz naše online prodavnice
              </Link>
            </div> */}

            <div className='page-akcija' style={{ opacity: '0' }}>
              <h4>Akcija</h4>
              <p>Budite u toku</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='credits'>
        <div className='credit-cards'>
          <div className='visa'></div>
          <div className='express'></div>
          <div className='master'></div>
          <div className='dina'></div>
        </div>
        <p>© 2022 Jugometal d.o.o. Sva prava zadržana.</p>
      </div>
    </div>
  )
}

export default Footer
