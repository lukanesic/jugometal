import Head from 'next/head'

import MainLayout from '../layout/MainLayout'

import HomeBanner from '../components/Banners/HomeBanner'
import Logo from '../components/Logo'
import LandingMoto from '../components/Moto/LandingMoto'
import FrontCategories from '../components/FrontCategories'
import Featured from './../components/Featured'
import Qoute from './../components/Quote'
import { fetchFeatured } from '../lib/data'
import { useEffect } from 'react'

export default function Home({ data }) {
  useEffect(() => {
    const body = document.querySelector('#__next')

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    )
  }, [])
  return (
    <div>
      <Head>
        <title>Jugometal</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainLayout>
        <Logo />
        <HomeBanner />
        <LandingMoto />
        <FrontCategories />

        <Featured data={data} />
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
