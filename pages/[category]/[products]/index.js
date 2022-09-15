import React from 'react'
import { motion } from 'framer-motion'

// Probaj i sa drugim layoutom. Ne zaboravi
import MainLayout from './../../../layout/MainLayout'
// Zapravo logo treba da se premesti, layout je uvek isti
import Logo from './../../../components/Logo'
import SecLogo from './../../../components/Logo/SecLogo'

import ProductBox from '../../../components/ProuductBox'

const Products = () => {
  return (
    <MainLayout>
      <motion.div
        className='collection'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='collection-heading'>
          {/* Dynamic */}
          <h1>Carraro</h1>
          {/* <h1>{path && path}</h1> */}
          <h4>Traktori</h4>
        </div>

        <div className='home-box-container'>
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
          <ProductBox name={'IMT 334'} placeholder />
        </div>

        {/* iz baze */}
        {/* <div className='home-box-container'>
          {data.map((product) => (
            <Box
              link={`${path}/${product.href}`}
              name={product.name}
              price={product.price}
              image={product.image}
              key={product._id}
            />
          ))}
        </div> */}
      </motion.div>
    </MainLayout>
  )
}

export default Products
