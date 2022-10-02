import React, { useEffect, useState } from 'react'
import Logo from '../../../../components/Logo'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MainLayout from '../../../../layout/MainLayout'
import { fetchAll, fetchProduct } from '../../../../lib/data'

import ContactForm from '../../../../components/ContactForm'

import { useSession } from 'next-auth/react'
import Head from 'next/head'

const Product = ({ path, data }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const product = data[0]

  const [remove, setRemove] = useState('Izbrišite proizvod')

  useEffect(() => {
    const body = document.querySelector('#__next')

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      1500
    )
  }, [])

  const handleDelete = async (id) => {
    try {
      await fetch('/api/products/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      })
      router.replace('/')
      setRemove('Proizvod uspešno izbrisan')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>{`${product.title} - Jugometal`}</title>
        <meta
          name='description'
          property='og:description'
          content={`${product.description}`}
        />
      </Head>
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
                objectFit='contain'
                objectPosition='center'
              />
            </div>
            <div className='p-info'>
              {!session && <h1>{product.title} </h1>}
              {session && (
                <>
                  <h1>{product.title} </h1>
                  <button onClick={() => handleDelete(product._id)}>
                    {remove}
                  </button>
                </>
              )}
              {/* <h4>{capitalizeFirstLetter(product.category)}</h4> */}

              <p>{product.about}</p>

              <ul>
                <li>{product.spec1}</li>
                <li>{product.spec2}</li>
                <li>{product.spec3}</li>
                <li>{product.spec4}</li>
                <li>{product.spec5}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <ContactForm product={{ title: product.title, id: product._id }} />
      </MainLayout>
    </>
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
