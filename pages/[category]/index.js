import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { fadeTractor } from '../../lib/animations'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import PageBanner from './../../components/Banners/PageBanner'
import Box from './../../components/Box'

import TractorImg from './../../public/images/banners/tr2.jpg'
import RatImg from './../../public/images/banners/rat.jpg'
import VocImg from './../../public/images/banners/voc.jpg'
import StocImg from './../../public/images/banners/stoc.jpg'
import TransImg from './../../public/images/banners/transport.jpg'

const Category = () => {
  return (
    <MainLayout>
      <Logo />
      {/* TEST TEST TEST TEST */}
      {/* TU IDU DINAMICNI PODACI IZ BAZE U ZAVISNOSTI KOJI JE LINK PRETISNUT */}

      <PageBanner
        h1={'Traktori'}
        p={'Izaberite traktor iz naše ponude koji odgovara Vašim potrebama'}
        src={TractorImg}
        alt={'TractorBanner'}
      />

      {/* DINAMICNO */}
      <motion.div
        animate='show'
        initial='hidden'
        variants={fadeTractor}
        className='six-grid-system'
      >
        <Box
          brandTitle={'Carraro'}
          brandDescription={
            'Carraro Agritalia je italijanski proizvođač traktora'
          }
        />
        <Box
          brandTitle={'IMT'}
          brandDescription={
            'IMT je pionir u mehanizaciji farmi i tehnologiji traktora '
          }
        />
        <Box
          brandTitle={'Carraro'}
          brandDescription={
            'Carraro Agritalia je italijanski proizvođač traktora'
          }
        />
        <Box
          brandTitle={'Carraro'}
          brandDescription={
            'Carraro Agritalia je italijanski proizvođač traktora'
          }
        />
        <Box
          brandTitle={'Carraro'}
          brandDescription={
            'Carraro Agritalia je italijanski proizvođač traktora'
          }
        />
        <Box
          brandTitle={'Carraro'}
          brandDescription={
            'Carraro Agritalia je italijanski proizvođač traktora'
          }
        />
      </motion.div>
    </MainLayout>
  )
}

export default Category
