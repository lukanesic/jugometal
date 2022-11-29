import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { capitalizeFirstLetter } from '../../lib/func'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const FeauturedSlider = ({ data }) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    mobileFirst: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <div className='ponuda-header'>
        <h4>Jugometal</h4>
        <h5>Naša ponuda</h5>
        <p>
          Pogledajte neke od naših najprodavanijih proizvoda koji su spremi za
          porudžbine istog trenutka. Pozovite za više informacija i raspitajte
          se detaljno o stanju, opremi i ceni proizvoda
        </p>
      </div>

      <div className='ponuda-slider'>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  )
}

export default FeauturedSlider

const NextArrow = ({ onClick }) => {
  return (
    <div className='next-arrow' onClick={onClick}>
      <IoIosArrowForward />
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div className='prev-arrow' onClick={onClick}>
      <IoIosArrowBack />
    </div>
  )
}
