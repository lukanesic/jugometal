import Link from 'next/link'
import React from 'react'

const LandingMoto = () => {
  return (
    <div className='landing-moto'>
      <h1>
        Mi smo <span>Jugometal</span>
      </h1>
      <p>U hrani je buducnost</p>
      <h6>
        Višegodišnji rad, saradnja sa poljoprivrednicima, poslovnost i
        posvećenost potrebama kupaca, doprineli su da <span>Jugometal</span>{' '}
        postane lider u prodaji poljoprivredne mehenizacije.
      </h6>

      <Link href='/o-nama'>Ko je Jugometal ?</Link>
    </div>
  )
}

export default LandingMoto
