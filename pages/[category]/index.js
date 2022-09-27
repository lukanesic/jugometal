import React from 'react'

import { motion } from 'framer-motion'
import { fadeTractor } from '../../lib/animations'
import {
  capitalizeAllLetters,
  capitalizeFirstLetter,
  removeDuplicates,
  selectBanner,
  selectBannerDescription,
  selectSubcategoryDescription,
} from '../../lib/func'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import PageBanner from './../../components/Banners/PageBanner'
import Box from './../../components/Box'

const Category = ({ path, data }) => {
  const subCategories = removeDuplicates(data.map((sub) => sub.subcategory))

  return (
    <MainLayout>
      <Logo />

      <PageBanner
        h1={path && capitalizeAllLetters(path)}
        p={selectBannerDescription(path)}
        src={selectBanner(path)}
        alt={`${capitalizeFirstLetter(path)} Banner`}
      />

      <motion.div
        animate='show'
        initial='hidden'
        variants={fadeTractor}
        className='six-grid-system'
      >
        {subCategories &&
          subCategories.map((subs, index) => (
            <Box
              key={index}
              brandTitle={capitalizeAllLetters(subs)}
              brandDescription={selectSubcategoryDescription(subs)}
              link={`/${path}/${subs}`}
            />
          ))}
      </motion.div>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const getCategoryPath = async () => {
    const request = await fetch(`/api/products/all`)
    const response = await request.json()
    return response
  }

  const data = await getCategoryPath()
  const paths = await data.map((product) => {
    return {
      params: { category: product.category },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const getCollection = async () => {
    const request = await fetch(
      `/api/products/category?params=${params.category}`,
      params
    )
    const response = await request.json()
    return response
  }

  const data = await getCollection()

  return {
    props: {
      data,
      path: params.category,
    },
  }
}

export default Category
