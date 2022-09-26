import React from 'react'
import Logo from '../../../../components/Logo'
import { motion } from 'framer-motion'
import Image from 'next/image'

import MainLayout from '../../../../layout/MainLayout'

const Product = ({ path, data }) => {
  const product = data[0]
  return (
    <MainLayout>
      <Logo cls={'product-logo'} />
      <motion.div
        className='collection'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='collection-heading'>
          {/* Dynamic */}
          {/* <h1>{collectionName}</h1> */}
          <h1>{product.title}</h1>
          <h4>{product.subcategory.toUpperCase()}</h4>
        </div>
        <div className='product-container'>
          {/* Placeholder dok ne dobijem pravu sliku */}
          <div
            className='img-placeholder'
            style={{
              height: 400,
              width: 600,
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <Image
              src={product.image}
              alt={product.title}
              layout='fill'
              objectFit='center'
            />
          </div>
          <div className='p-info'>
            <p className='description d1'>{product.about}</p>
            <p className='description d2'>{product.description}</p>
            {/* <h3>Price</h3>
            <h3>${product.price}</h3> */}
            <button
            // onClick={() =>
            //   handleAddToCart({
            //     name: product.name,
            //     price: product.price,
            //     about: product.about,
            //     description: product.description,
            //     _id: product._id,
            //     image: product.image,
            //   })
            // }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  )
}

export default Product

export async function getStaticPaths() {
  const getCategoryPath = async () => {
    const request = await fetch(`http://localhost:3000/api/products/all`)
    const response = await request.json()
    return response
  }

  const data = await getCategoryPath()
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
  const getCollection = async () => {
    const request = await fetch(
      `http://localhost:3000/api/products/product?params=${params.product}`,
      params
    )
    const response = await request.json()
    return response
  }

  const data = await getCollection()

  return {
    props: {
      data,
      path: params.products,
    },
  }
}
