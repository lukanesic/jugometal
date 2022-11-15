import React, { useEffect } from 'react'
import Head from 'next/head'

import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'

import DeloviBanner from './../../public/images/banners/delovi.jpg'
import { FaFacebookF } from 'react-icons/fa'

const RezervniDelovi = () => {
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
        <title>Rezervni Delovi - Jugometal</title>
        <meta property='og:title' content='Rezervni Delovi - Jugometal' />
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

      <MainLayout>
        <Logo />
        <PageBanner
          src={DeloviBanner}
          alt={'Delovi Banner'}
          h1={'Rezervni delovi'}
          p={'Pozovite za više detalja'}
        />
        <div className='o-nama max-width'>
          <div className='content'>
            <p>
              Jugometal isporučuje originalne rezervne delove za servisiranje
              traktora i mašina u garantnom i postgarantnom periodu.
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
                <span>Originalni rezervni delovi</span> za sve traktore i
                priključne mašine
              </li>
              <li>
                <span>Jinma</span> | <span>Massey Ferguson</span> |{' '}
                <span>IMT</span> | <span>Landini</span> | <span>Shell</span>
              </li>
            </ul>

            <div className='social'>
              <a href='https://facebook.com/jugometal' className='facebook'>
                <FaFacebookF
                  className='facebook'
                  href='https://facebook.com/jugometal'
                />
              </a>
              <a href='tel:+38135312391' className='phone'>
                035/312-391
              </a>
              <a href='mailto:jugometal.co.rs' className='email'>
                jugometal@gmail.co.rs
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default RezervniDelovi
