import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import MainLayout from './../../layout/MainLayout'
import ProductBox from './../../components/ProuductBox'
import Logo from './../../components/Logo'

const Search = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { searchKeyword } = useSelector((state) => state.search)

  useEffect(() => {
    const fetchProducts = async () => {
      const request = await fetch('/api/products/all')
      const response = await request.json()
      setProducts(response)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  const searchKey = searchKeyword.toLowerCase()

  const filteredProducts = products
    .map((product) => product)
    .filter((product) => product.searchKey.includes(searchKey))

  return (
    <MainLayout>
      <Logo cls={'product-logo'} />
      <div className='search-container'>
        <div className='search-heading'>
          <h4>{!searchKeyword && 'Pretražite proizvode!'}</h4>
          <h1>{searchKeyword && searchKeyword}</h1>
          <h4>{searchKeyword && 'Vaši rezultati'}</h4>
        </div>

        {/* Motion  */}
        {loading && (
          <div className='home-box-container'>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <ProductBox key={item} placeholder />
            ))}
          </div>
        )}

        {Object.keys(products).length === 0 && ''}

        {/* Motion */}
        {!loading && (
          <div className='no-products'>
            {Object.keys(filteredProducts).length === 0 && (
              <>
                <h2>Šta tačno tražite?</h2>

                <p>
                  Vaša pretraga za {`'${searchKeyword}''`} nije pokazala
                  rezultat.
                </p>
              </>
            )}
          </div>
        )}

        <div className='home-box-container'>
          {filteredProducts.map((product) => (
            <ProductBox
              key={product._id}
              title={product.title}
              link={`${product.category}/${product.subcategory}/${product.url}`}
              image={product.image}
              id={product._id}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Search
