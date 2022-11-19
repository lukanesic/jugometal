import React, { useEffect } from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'
import Navigation from './../../components/Navigation'
import FinansBanner from './../../public/images/banners/finance.jpg'
import Loader from '../../components/Loader'

const Finansiranje = () => {
  useEffect(() => {
    const body = document.querySelector('#__next')

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      1500
    )
  }, [])

  return (
    <>
      <title>Finansiranje - Jugometal</title>
      <meta property='og:title' content='Finansiranje - Jugometal' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        property='og:description'
        content='Traktori, priključne mašine - Traktori i poljoprivredne mašine domaćih proizvođača IMT i IMR, Solis, Zetor, Čelmak kao i svetski poznatog Massey Fergusona. Prodaja priključnih mašina i servisiranje.'
      />
      {/* <meta property='og:url' content='Ovde se vracas posle i stavljas domen https://jugometal.com' /> */}
      <meta property='og:site_name' content='Jugometal Svilajnac' />
      <meta />
      <Loader />
      <MainLayout>
        <Logo />
        <Navigation />
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
                Celokupan asortiman naših proizvoda možete kupiti sa rokom
                otplate od 3 godine i dinarskom kamatnom stopom od 6% na
                godišnjem nivou.
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
                Za dodatne informacije obratite se telefonom na broj
                035/312-391.
              </span>
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Finansiranje
