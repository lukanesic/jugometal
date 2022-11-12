import Head from 'next/head'
import { fetchFeatured } from '../lib/data'
import { useEffect } from 'react'

import MainLayout from '../layout/MainLayout'
import HomeBanner from '../components/Banners/HomeBanner'
import Logo from '../components/Logo'
import LandingMoto from '../components/Moto/LandingMoto'
import FrontCategories from '../components/FrontCategories'
import Featured from './../components/Featured'
import Qoute from './../components/Quote'
import Delovi from '../components/Delovi'
import Navigation from '../components/Navigation'
import Categories from '../components/Categories'
import Offer from '../components/Offer'
import FeatureBrands from '../components/FeatureBrands'
import Rezervni from '../components/Rezervni'

export default function Home({ data }) {
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
    <div>
      <Head>
        <title>Jugometal</title>
        <meta property='og:title' content='Jugometal' />
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
        <Navigation />
        <HomeBanner />
        {/* <LandingMoto /> */}
        <Categories />

        <Featured data={data} />
        {/* <Offer heading={'Ponuda traktora'} />
        <Offer heading={'Ponuda mašina'} /> */}
        <FeatureBrands />
        {/* <Rezervni /> */}
        <Delovi />
        <Qoute />
      </MainLayout>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetchFeatured()
  const data = JSON.parse(JSON.stringify(response))
  return {
    props: {
      data,
    },
  }
}
