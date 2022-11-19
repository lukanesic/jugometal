import Head from 'next/head'
import React, { useEffect } from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import MainLayout from './../../layout/MainLayout'
import Loader from '../../components/Loader'
import OnamaBanner from './../../public/images/banners/about.jpg'

const ONama = () => {
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
      <Head>
        <title>O nama - Jugometal</title>
        <meta property='og:title' content='O nama - Jugometal' />
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
      </Head>
      <Loader />
      <MainLayout>
        <Logo />
        <Navigation />
        <PageBanner
          src={OnamaBanner}
          alt={'About Banner'}
          h1={'Jugometal'}
          p={'Ko smo mi'}
        />
        <div className='o-nama max-width'>
          <div className='content'>
            <p>
              Preduzeće{' '}
              <span className='jugo-title'>Jugometal d.o.o. Svilajnac</span>{' '}
              osnovano je 1990. godine. Višegodišnji rad, saradnja sa
              poljoprivrednicima, poslovnost i posvećenost potrebama kupaca,
              doprineli su da{' '}
              <span className='jugo-title'>
                Jugometal postane lider u prodaji poljoprivredne mehenizacije.
              </span>
            </p>
            <p>
              Naš prodajni program sačinjavaju traktori inostranih proizvođača{' '}
              <span className='traktori-title'>
                YTO, Solis, Zetor, Ursus, Belarus, Mahindra, IMT, John Deere,
                Carraro.{' '}
              </span>
            </p>

            <p>
              Takođe, zastupamo i prodajemo proizvode domaćih proizvođača
              priključnih mašina{' '}
              <span className='traktori-title'>
                FPM Agromehanika iz Boljevca, Morava, Majevica, i dr.
              </span>{' '}
              kao i proizvode renomiranih firmi iz okruženja{' '}
              <span className='traktori-title'>
                SIP Šempeter, INO Brežice, Gorenc Slovenija, Agromehanika Kranj
                Slovenija, ME-GA iz Hrvatske, Čelmak iz Turske{' '}
              </span>{' '}
              i mnogi drugi.
            </p>
            <p>
              Osim prodaje ,{' '}
              <span className='underline'>
                naša firma obavlja i usluge servisiranja
              </span>
              , zahvaljujuci odlično organizovanoj servisnoj službi, opremljenoj
              originalnim rezervnim delovima.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ONama
