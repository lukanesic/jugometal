import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { capitalizeFirstLetter } from '../../lib/func'

const Featured = ({ data }) => {
  return (
    <div>
      <div className='ponuda-header'>
        <h4>Jugometal</h4>
        <h5>Naša ponuda</h5>
        <p>
          Pogledajte neke od naših najprodavanijih i najpristupacnijih proizvoda
          koji su spremi za porudzbine istog trenutka. Pozovite za više
          informacija i raspitajte se detaljno o stanju, opremi i ceni
          proizvoda.
        </p>
      </div>

      <div className='ponuda-products max-width'>
        {data.map((product) => (
          <div className='ponuda-product-item' key={product._id}>
            <div className='product-item-image-container'>
              <Image
                src={product.image}
                alt={product.title}
                layout='fill'
                objectPosition='center'
                objectFit='contain'
              />
            </div>

            <div className='product-item-content'>
              <h5>{capitalizeFirstLetter(product.category)}</h5>
              <h3>{product.title}</h3>
              <div className='h-line'></div>
              <p>{product.about}</p>
              <Link
                href={`${product.category}/${product.subcategory}/${product.url}`}
              >
                Detaljnije
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
