import React, { useEffect } from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'

import Contact from './../../public/images/banners/korpa2.jpg'
import Head from 'next/head'
import Navigation from '../../components/Navigation'

import { BsFillTelephoneFill } from 'react-icons/bs'

const Kontakt = () => {
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
        <title>Kontakt - Jugometal</title>
        <meta property='og:title' content='Kontakt - Jugometal' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          property='og:description'
          content='Traktori, priključne mašine - Traktori i poljoprivredne mašine domaćih proizvođača IMT i IMR, Solis, Zetor, Čelmak kao i svetski poznatog Massey Fergusona. Prodaja priključnih mašina i servisiranje.'
        />
        {/* <meta property='og:url' content='Ovde se vracas posle i stavljas domen https://jugometal.com' /> */}
        <meta property='og:site_name' content='Jugometal Svilajnac' />
      </Head>
      <MainLayout>
        <Logo />
        <Navigation />
        <PageBanner
          src={Contact}
          alt={'Kontakt Banner'}
          h1={'Kontakt'}
          p={'Jugometal'}
        />

        <div className='kontakt'>
          <div className='kontakt-container'>
            <h3>Jugometal</h3>
            <h4>Svilajnac</h4>

            <div className='address'>
              <p>ul. Kneza Miloša 81</p>
              <p>35210, Svilajnac</p>
            </div>

            <div className='country'>
              <p>Srbija</p>
            </div>

            <div className='phone'>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Delovi: 035/311-137
              </p>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Fax: 035/312-331
              </p>
              <p className='mail'>
                <span>@</span> info@jugometal.co.rs
              </p>
            </div>
          </div>
          <div className='kontakt-container'>
            <h3>Jugometal</h3>
            <h4>Temerin</h4>

            <div className='address'>
              <p>ul. Novosadska 634</p>
              <p>21235, Temerin</p>
            </div>

            <div className='country'>
              <p>Srbija</p>
            </div>

            <div className='phone'>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Telefon: 021/840-038
              </p>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Fax: 021/840-505
              </p>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Mobilni: 063/10-58-705
              </p>
              <p className='mail'>
                <span>@</span> info@jugometal.co.rs
              </p>
            </div>
          </div>
          <div className='kontakt-container'>
            <h3>Jugometal</h3>
            <h4>Požarevac</h4>

            <div className='address'>
              <p>ul. Beogradski put 17/A</p>
              <p>12000, Požarevac</p>
            </div>

            <div className='country'>
              <p>Srbija</p>
            </div>

            <div className='phone'>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Telefon: 012/665-544
              </p>
              <p>
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                Mobilni: 063/10-58-762
              </p>
              <p className='mail'>
                <span>@</span> info@jugometal.co.rs
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Kontakt
