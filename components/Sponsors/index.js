import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import sip from './../../public/images/sponsors/sip.jpeg'
import zetor from './../../public/images/sponsors/zetor.png'
import fpm from './../../public/images/sponsors/fpm.png'
import belarus from './../../public/images/sponsors/belarus.png'
import imt from './../../public/images/sponsors/imt.gif'
import majevica from './../../public/images/sponsors/majevica.jpeg'
import ino from './../../public/images/sponsors/ino.png'
import mahindra from './../../public/images/sponsors/mahindra.png'
import solis from './../../public/images/sponsors/solis.png'
import ursus from './../../public/images/sponsors/ursus.png'
import yto from './../../public/images/sponsors/yto.png'
import celmak from './../../public/images/sponsors/celmak.png'
import carraro from './../../public/images/sponsors/carraro.jpg'
import deere from './../../public/images/sponsors/deere.jpg'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

const Sponsors = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    mobileFirst: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const router = useRouter()

  const sponsors = [
    {
      link: 'sip',
      img: sip,
    },
    {
      link: 'carraro',
      img: carraro,
    },
    {
      link: 'fpm-agromehanika',
      img: fpm,
    },
    {
      link: 'majevica',
      img: majevica,
    },

    {
      link: 'belarus',
      img: belarus,
    },
    {
      link: 'imt',
      img: imt,
    },

    {
      link: 'ino-brezice',
      img: ino,
    },
    {
      link: 'celmak',
      img: celmak,
    },
    {
      link: 'mahindra',
      img: mahindra,
    },
    {
      link: 'ursus',
      img: ursus,
    },
    {
      link: 'yto',
      img: yto,
    },
    {
      link: 'solis',
      img: solis,
    },
    {
      link: 'zetor',
      img: zetor,
    },
    {
      link: 'john-deere',
      img: deere,
    },
  ]

  return (
    <div className='sponsors'>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div className='logo-plc' key={index}>
            <Image
              src={sponsor.img}
              alt={sponsor.link}
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/${sponsor.link}`)}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Sponsors

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
