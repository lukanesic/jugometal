import React from 'react'
import Logo from '../../../../components/Logo'
import { motion } from 'framer-motion'
import Image from 'next/image'

import MainLayout from '../../../../layout/MainLayout'
import { fetchAll, fetchProduct } from '../../../../lib/data'

import { capitalizeFirstLetter } from './../../../../lib/func'

const Product = ({ path, data }) => {
  const product = data[0]
  return (
    <MainLayout>
      {/* <Logo cls={'product-logo'} /> */}
      <Logo />
      <motion.div
        className='collection'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='product-container'>
          <div className='img-placeholder'>
            <Image
              src={product.image}
              alt={product.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='p-info'>
            <h1>{product.title}</h1>
            <h4>{capitalizeFirstLetter(product.category)}</h4>
            <p>
              Promena. Ovde dolaze specifikacije koji ce svaki proizvod da ima.
              Znaci 3 osnovne informacije kao kod John Deere i to je to.
            </p>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  )
}

export default Product

export async function getStaticPaths() {
  const response = await fetchAll()
  const data = JSON.parse(JSON.stringify(response))

  const paths = await data.map((product) => {
    return {
      params: {
        category: product.category,
        products: product.subcategory,
        product: product.url,
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context

  const response = await fetchProduct(params.product)
  const data = JSON.parse(JSON.stringify(response))

  return {
    props: {
      data,
      path: params.product,
    },
  }
}
