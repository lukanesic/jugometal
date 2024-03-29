import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

// Probaj i sa drugim layoutom. Ne zaboravi
import MainLayout from '../../../layout/MainLayout'
// Zapravo logo treba da se premesti, layout je uvek isti
import Logo from '../../../components/Logo'

import ProductBox from '../../../components/ProuductBox'
import {
  removeDuplicates,
  capitalizeFirstLetter,
  capitalizeAllLetters,
  selectBannerDescription,
  selectBanner,
  selectSubcategoryDescription,
} from '../../../lib/func'
import { fetchAll, fetchSubcategory } from '../../../lib/data'
import PageBanner from '../../../components/Banners/PageBanner'
import Head from 'next/head'
import Navigation from '../../../components/Navigation'
import Loader from '../../../components/Loader'

const Products = ({ data, path }) => {
  const category = removeDuplicates(data.map((sub) => sub.category)).toString()
  const subCategory = removeDuplicates(
    data.map((sub) => sub.subcategory)
  ).toString()

  const router = useRouter()

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
        <title>{`${capitalizeFirstLetter(path)} - Jugometal`}</title>
        <meta
          name='description'
          property='og:description'
          content='Traktori, priključne mašine - Traktori i poljoprivredne mašine domaćih proizvođača IMT i IMR, Solis, Zetor, Čelmak kao i svetski poznatog Massey Fergusona. Prodaja priključnih mašina i servisiranje.'
        />
      </Head>
      <Loader />
      <MainLayout>
        {/* <Logo cls={'product-logo'} /> */}
        <Logo />
        <Navigation />
        <PageBanner
          h1={path && capitalizeAllLetters(path)}
          p={selectSubcategoryDescription(subCategory)}
          src={selectBanner(category)}
          alt={`${capitalizeFirstLetter(path)} Banner`}
        />
        <motion.div
          className='collection'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='collection-heading'>
            {/* Dynamic */}
            {/* <h1>{path && path}</h1> */}
            {/* <h1>{path && path}</h1> */}
            {/* <h4>{category && capitalizeFirstLetter(category)}</h4> */}
          </div>

          {/* iz baze */}
          <div className='home-box-container'>
            {data.map((product) => (
              <ProductBox
                title={product.title}
                link={`/${product.category}/${path}/${product.url}`}
                name={product.name}
                image={product.image}
                key={product._id}
                description={product.description}
                category={category}
              />
            ))}
          </div>
        </motion.div>
      </MainLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  const response = await fetchAll()
  const data = JSON.parse(JSON.stringify(response))

  const paths = await data.map((product) => {
    return {
      params: { category: product.category, products: product.subcategory },
    }
  })
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const { params } = context

  const response = await fetchSubcategory(params.products)
  const data = JSON.parse(JSON.stringify(response))

  return {
    props: {
      data,
      path: params.products,
    },
    revalidate: 60,
  }
}

export default Products
