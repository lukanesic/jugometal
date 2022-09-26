import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { capitalizeFirstLetter } from '../../lib/func'

const Featured = ({ data }) => {
  return (
    <div>
      <div className='ponuda-header'>
        <h2>Jugometal Ponuda</h2>
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
            <div
              className='product-item-image-container'
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                margin: '0 auto',
              }}
            >
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
                href={`${product.category}/${product.brandUrl}/${product.url}`}
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
