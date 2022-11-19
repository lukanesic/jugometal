import React from 'react'
import { useSelector } from 'react-redux'
import { formatNumber } from './../../lib/func'

import { useRouter } from 'next/router'

const CartSummary = () => {
  const { cartTotalAmonut, cartTotalQuantity } = useSelector(
    (state) => state.cart
  )

  const router = useRouter()

  return (
    <div className='cart-summary'>
      <h5>Totalno u korpi</h5>
      <div className='cart-summary-ctr'>
        <div className='totalno-l'>
          <p>Količina predmeta</p>
          <p>Totalni iznos</p>
        </div>
        <div className='totalno-r'>
          <p>x{cartTotalQuantity}</p>
          <p>{formatNumber(cartTotalAmonut)} RSD</p>
        </div>
      </div>

      <button onClick={() => router.push('/checkout')}>Poručite</button>
    </div>
  )
}

export default CartSummary
