import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Test = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div className='ponuda-header'>
        <h2>Jugometal Ponuda</h2>
        <p>
          Pogledajte neke od naših najprodavanijih i najpristupacnijih proizvoda
          koji su spremi za porudzbine istog trenutka. Pozovite za više
          informacija i raspitajte se detaljno o stanju, opremi i ceni
          proizvoda.
        </p>
      </div>

      <div className='ponuda-products max-width'>
        <div className='ponuda-product-item'>
          {/* <div className="solis-60"></div> */}

          <div className='solis-60-preporuka'></div>
          <div className='product-item-content'>
            <h5>Solis</h5>
            <h3>Solis 60</h3>
            <div className='h-line'></div>
            <p>
              Solis 60 su univerzalni traktori namenjeni za korišćenje u
              poljoprivredi, komunalne radove i transport.
            </p>
            <Link href='/traktori/solis/solis-60'>Detaljnije</Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="yto-504"></div> */}
          <div className='yto-504-preporuka'></div>
          <div className='product-item-content'>
            <h5>YTO</h5>
            <h3>504,4 WD</h3>
            <div className='h-line'></div>
            <p>
              Traktor YTO 504,4 WD sa Standard ili Euro kabinom. Standard kabina
              je oslonjena preko elastičnih ..
            </p>
            <Link href='/traktori/yto/yto-504'>Detaljnije</Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="yto-454"></div> */}
          <div className='yto-454-preporuka'></div>
          <div className='product-item-content'>
            <h5>YTO</h5>
            <h3>454,4 WD</h3>
            <div className='h-line'></div>
            <p>
              Traktor YTO 454,4 WD sa Standard ili Euro kabinom. Standard kabina
              je oslonjena preko elastičnih ..
            </p>
            <Link href='/traktori/yto/yto-454'>Detaljnije</Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="solis-50"></div> */}
          <div className='solis-50-preporuka'></div>
          <div className='product-item-content'>
            <h5>Solis</h5>
            <h3>Solis 50</h3>
            <div className='h-line'></div>
            <p>
              Solis 50 je univerzalni traktor namenjen za korišćenje u
              poljoprivredi, komunalne radove i transport.
            </p>
            <Link href='/traktori/solis/solis-50'>Detaljnije</Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="ursus-presa"></div> */}
          <div className='balirka-preporuka'></div>
          <div className='product-item-content'>
            <h5>Ursus</h5>
            <h3>Balirka</h3>
            <div className='h-line'></div>
            <p>
              Balirke za okrugle bale namenjene su za baliranje slamnatog
              materijala od 25% vlage. Materijal je valjan u bale prečnika
              1200mm.
            </p>
            <Link href='/stocarstvo/balirke/ursus-balirka-543-a'>
              Detaljnije
            </Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="celmak-prikolica"></div> */}
          <div className='celmak-prikolica-preporuka'></div>
          <div className='product-item-content'>
            <h5>Čelmak</h5>
            <h3>Prikolica</h3>
            <div className='h-line'></div>
            <p>
              Prikolica Čelmak kapaciteta 8t, širine 2200mm i dužine 5900mm.
              Visina poklopca je 700mm sa dodatnom visinom od 300mm.
            </p>
            <Link href='/transport/prikolice/dvoosovinska-prikolica-8-t'>
              Detaljnije
            </Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="agrisprint-kosacica"></div> */}
          <div className='rotaciona-kosacica-agrisprint-preporuka'></div>
          <div className='product-item-content'>
            <h5>Agrisprint</h5>
            <h3>Kosacica</h3>
            <div className='h-line'></div>
            <p>
              Rotaciona kosačica Agrisprint dolazi sa 950mm duzinom i 2850mm
              širinom. Težina iznosi 350kg, dok je potrebna snaga traktora
              40KS..
            </p>
            <Link href='/stocarstvo/kosacice/rotaciona-kosacica-agrisprint-135-165'>
              Detaljnije
            </Link>
          </div>
        </div>

        <div className='ponuda-product-item'>
          {/* <div className="motalica-metalfach"></div> */}
          <div className='motalica-metalfach-preporuka'></div>
          <div className='product-item-content'>
            <h5>Metal-Fach</h5>
            <h3>Motalica </h3>
            <div className='h-line'></div>
            <p>
              Umotač bala za bale Z237 Z opremljen je sistemom koji rotira
              osovine podnih točaka, što olakšava transport mašine.
            </p>
            <Link href='/stocarstvo/motalice/motalica-z-237'>Detaljnije</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
