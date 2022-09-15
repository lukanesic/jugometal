import React from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'

import FinansBanner from './../../public/images/banners/finance.jpg'

const index = () => {
  return (
    <MainLayout>
      <Logo />
      <PageBanner
        h1={'Finansiranje'}
        p={'Obnovite poljoprivrednu mehanizaciju'}
        src={FinansBanner}
        alt={'Finansiranje Banner'}
      />
      <div className='finans max-width'>
        <div className='content'>
          <p>
            <span className='kupci'>
              <i>Poštovani kupci,</i>
            </span>
          </p>
          <p>
            Iskoristite šansu da pod veoma povoljnim uslovima obnovite Vašu
            poljoprivrednu mehanizaciju.
          </p>
          <p>
            <span className='traktori-title'>
              Celokupan asortiman naših proizvoda možete kupiti sa rokom otplate
              od 3 godine i dinarskom kamatnom stopom od 6% na godišnjem nivou.
            </span>
          </p>
          <p>
            Ovaj način subvencionisanog finansiranja se odvija u saradnji sa
            Ministarstvom poljoprivrede i sledećih banaka:
          </p>
          <ul>
            <li> - ProCredit banka</li>
            <li> - Banca Intesa</li>
            <li> - Komercijalna banka</li>
          </ul>

          <p className='small'>
            <span className='traktori-title'>
              Za dodatne informacije obratite se telefonom na broj 035/312-391.
            </span>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default index
