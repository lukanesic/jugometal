import React from 'react'
import { motion } from 'framer-motion'

// Probaj i sa drugim layoutom. Ne zaboravi
import MainLayout from '../../../layout/MainLayout'
// Zapravo logo treba da se premesti, layout je uvek isti
import Logo from '../../../components/Logo'

import ProductBox from '../../../components/ProuductBox'
import { removeDuplicates, capitalizeFirstLetter } from '../../../lib/func'
import { fetchAll, fetchSubcategory } from '../../../lib/data'

const Products = ({ data, path }) => {
  const category = removeDuplicates(data.map((sub) => sub.category)).toString()

  console.log(data)

  return (
    <MainLayout>
      <Logo cls={'product-logo'} />
    </MainLayout>
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
    fallback: false,
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
  }
}

export default Products
