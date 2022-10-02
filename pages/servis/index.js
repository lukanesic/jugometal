import React, { useEffect } from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'

import ServisBanner from './../../public/images/banners/servis2.jpg'
import Head from 'next/head'

const Servis = () => {
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
      <title>Servis - Jugometal</title>
      <meta property='og:title' content='Servis - Jugometal' />
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
      <MainLayout>
        <Logo />
        <PageBanner
          src={ServisBanner}
          alt={'Servis Banner'}
          h1={'Servis'}
          p={'Originalni delovi, servisiranje'}
        />

        <div className='servis max-width'>
          <div className='content'>
            <p>
              Naša kompanija poseduje značajno iskustvo u prodaji već dugi niz
              godina,
              <span className='traktori-title'>
                {' '}
                a u poslednje vreme sve veću pažnju poklanjamo post-prodajnim
                uslugama u vidu formiranja stručne servisne službe i snabdevanja
                originalnim rezervnim delovima.
              </span>
            </p>
            <p>
              Godinama unazad snabdevamo domaće tržište sa originalnim delovima
              priključnih mašina slovenačkog proizvođača ,
              <span className='traktori-title'>SIP ŠEMPETER</span> a u skorije
              vreme i delovima za domaće traktore ,
              <span className='traktori-title'>IMT i IMR</span>. Takođe u našem
              servisnom centru možete dobiti usluge servisiranja pomenutih
              traktora i mašina.
            </p>
            <p>
              <span className='traktori-title'>
                Jugometal omogućava snabdevanja rezervnim delovima MASSEY
                FERGUSON traktora na teritoriji Srbije kako bi zadovoljio sve
                zahteve kupaca.
              </span>
            </p>
            <p>
              Originalni delovi MASSEY FERGUSON su veoma značajni ukoliko želite
              da pravilno održavate i očuvate vaš traktor. Izrađuju ih ljudi
              koji veoma dobro poznaju mašine i apsolutno su pouzdani jer
              pružaju garanciju kvaliteta, efikasnost i dugotrajnost vašeg
              traktora.
            </p>

            <p>
              Ukoliko se snabdevate originalnim rezervnim delovima vaš zastoj u
              radu će biti minimalan zato što je svaki deo uvek dostupan, čak i
              čitavi motori.
              <span className='traktori-title'>
                {' '}
                Takođe, moćićete da nabavite sve delove za vaš traktor u
                narednih 10 godina od prestanka serijske proizvodnje određenog
                modela traktora.
              </span>{' '}
              Novi rezervni delovi imaju garanciju od 12 meseci ukoliko zamenite
              vaš dotrajali deo sa originalnim delom.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Servis
