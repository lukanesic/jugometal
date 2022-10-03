import React from 'react'

const Delovi = () => {
  return (
    <div className='delovi'>
      <h3>Rezervni delovi</h3>
      <p>
        Jugometal isporučuje originalne rezervne delove za servisiranje traktora
        i mašina u garantnom i postgarantnom periodu.
      </p>

      <ul>
        <li>
          <span>Brz odgovor</span> na zahtev kupca
        </li>
        <li>
          Hitna isporuka u roku od <span>1-2 dana</span> nakon naručivanja{' '}
        </li>
        <li>
          Više od <span>1000</span> rezervnih delova
        </li>
        <li>
          <span>Originalni rezervni delovi</span> za sve traktore i priključne
          mašine
        </li>
        <li>
          <span>Jinma</span> | <span>Massey Ferguson</span> | <span>IMT</span> |{' '}
          <span>Landini</span> | <span>Shell</span>
        </li>
      </ul>
    </div>
  )
}

export default Delovi
