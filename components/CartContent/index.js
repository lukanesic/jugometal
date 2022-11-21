import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux'

import { capitalizeFirstLetter, formatNumber } from '../../lib/func'
import { capitalizeAllLetters } from '../../lib/func'
import { useRouter } from 'next/router'

import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

import {
  addToCart,
  decreaseQty,
  getTotal,
  removeFromCart,
} from '../../redux/slices/cartSlice'
import CartSummary from '../CartSummary'

const CartContent = () => {
  const { cart, cartTotalAmonut, cartTotalQuantity } = useSelector(
    (state) => state.cart
  )

  const dispatch = useDispatch()
  const router = useRouter()

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  useEffect(() => {
    dispatch(getTotal())
  }, [cartTotalAmonut, cart, cartTotalQuantity, dispatch])

  return (
    <>
      {domLoaded && Object.keys(cart).length === 0 && (
        <div className='empty-cart'>
          <h2>Vaša korpa je prazna</h2>
          <p>Vratite se na početnu stranicu</p>
          <button onClick={() => router.push('/')}>Početna</button>
        </div>
      )}

      {domLoaded && Object.keys(cart).length !== 0 && (
        <>
          <div className='cnt-ctr hdgns'>
            <div className='left no-hdng-left'>
              <h4 style={{ marginLeft: '4rem' }}>Proizvod</h4>
            </div>
            <div className='right-lg'>
              <h4>Cena</h4>
              <h4>Kolicina</h4>
              <h4>Ukupno</h4>
            </div>
          </div>

          {cart.map((item, index) => (
            <div
              className='cnt-ctr'
              key={index}
              style={{ borderBottom: '1px solid #cecece' }}
            >
              <div className='left'>
                {/* Slika, title, ... */}
                <div className='cart-prod'>
                  <div
                    className='close-icon'
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <AiOutlineClose />
                  </div>

                  <div className='cart-img'>
                    <Image
                      src={item && item.image}
                      alt={item && item.title}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>

                  <div className='info'>
                    <h5>{capitalizeAllLetters(item && item.title)}</h5>
                    <h6>{capitalizeFirstLetter(item && item.category)}</h6>
                    <h4 className='price'>{item && item.mpcena} RSD</h4>
                    <h4 className='about'>{item && item.description}</h4>
                  </div>
                </div>
              </div>

              <div className='right-small'>
                <div className='qty-ctr'>
                  <AiOutlineMinus
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(decreaseQty(item))}
                  />
                  <div className='qty'>{item && item.qty}</div>
                  <AiOutlinePlus
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(addToCart(item))}
                  />
                </div>

                <p onClick={() => dispatch(removeFromCart(item))}>Obriši</p>
              </div>

              <div className='right-lg'>
                <p>
                  {item && formatNumber(item.mpcena)}
                  RSD
                </p>
                <div className='qty-ctr'>
                  <AiOutlineMinus
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(decreaseQty(item))}
                  />
                  <div className='qty'>{item && item.qty}</div>
                  <AiOutlinePlus
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(addToCart(item))}
                  />
                </div>
                <p style={{ fontWeight: 'bold' }}>
                  {item && formatNumber(item.qty * item.mpcena)} RSD
                </p>
              </div>
            </div>
          ))}

          <p className='continue-shop' onClick={() => router.push('/delovi')}>
            Nastavite sa kupovinom
          </p>

          <CartSummary />
        </>
      )}
    </>
  )
}

export default CartContent
