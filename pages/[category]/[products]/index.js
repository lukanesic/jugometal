import React from 'react'
import { motion } from 'framer-motion'

// Probaj i sa drugim layoutom. Ne zaboravi
import MainLayout from './../../../layout/MainLayout'
// Zapravo logo treba da se premesti, layout je uvek isti
import Logo from './../../../components/Logo'

import ProductBox from '../../../components/ProuductBox'
import { removeDuplicates, capitalizeFirstLetter } from '../../../lib/func'

const Products = ({ data, path }) => {
  const category = removeDuplicates(data.map((sub) => sub.category)).toString()

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
          <h1>{path && path}</h1>
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
            />
          ))}
        </div>
      </motion.div>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const getCategoryPath = async () => {
    const request = await fetch(`http://localhost:3000/api/products/all`)
    const response = await request.json()
    return response
  }

  const data = await getCategoryPath()
  const paths = await data.map((product) => {
    return {
      params: { category: product.category, products: product.subcategory },
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
      `http://localhost:3000/api/products/subcategory?params=${params.products}`,
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

export default Products
