import React, { useEffect } from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import Logo from '../../components/Logo'
import MainLayout from './../../layout/MainLayout'
import Navigation from './../../components/Navigation'
import KorpaBanner from './../../public/images/banners/korpa.jpg'
import CartContent from '../../components/CartContent'
import Order from '../../components/Order'

const Checkout = () => {
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
      <title>Porudžbina - Jugometal</title>
      <meta property='og:title' content='Korpa - Jugometal' />
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
        <Navigation />
        <PageBanner
          h1={'Porudžbina'}
          p={'Kontakt informacije'}
          src={KorpaBanner}
          alt={'Porudžbina Banner'}
        />

        <Order />
      </MainLayout>
    </>
  )
}

export default Checkout
