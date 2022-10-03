import React from 'react'
import Link from 'next/link'

import MainLayout from './../layout/MainLayout'
import PageBanner from './../components/Banners/PageBanner'
import ErrorBanner from '../public/images/banners/404.jpg'
import Logo from './../components/Logo'

const Custom404 = () => {
  return (
    <MainLayout>
      <Logo />
      <PageBanner
        src={ErrorBanner}
        alt={'Error Banner'}
        h1={'404'}
        p={'Stranica ne postoji'}
      />
      <div className='page-404'>
        <h1>Upps! Ova stranica nije pronađena</h1>
        <h4>Vratite se na početnu stranicu</h4>
        <Link href='/'>Početna </Link>
      </div>
    </MainLayout>
  )
}

export default Custom404
