import React from 'react'
import { useSelector } from 'react-redux'
import { formatNumber } from './../../lib/func'

import { useRouter } from 'next/router'

const OrderSummary = () => {
  const { cartTotalAmonut, cartTotalQuantity, cart } = useSelector(
    (state) => state.cart
  )

  return (
    <div className='cart-summary'>
      <h5>Predmeti u korpi</h5>

      {cart.map((item, index) => (
        <div className='cart-summary-ctr' key={index}>
          <div className='totalno-l'>
            <p>
              {item.title} x{item.qty}
            </p>
          </div>
          <div className='totalno-r'>
            <p>{formatNumber(item.qty * item.mpcena)} RSD</p>
          </div>
        </div>
      ))}

      <h5 style={{ marginTop: '2rem' }}>Totalno</h5>
      <div className='cart-summary-ctr'>
        <div className='totalno-l'>
          <p>Totalno proizvoda u korpi</p>
          <p>Totalno za plaćanje</p>
        </div>
        <div className='totalno-r'>
          <p>x{cartTotalQuantity}</p>
          <p>{formatNumber(cartTotalAmonut)} RSD</p>
        </div>
      </div>

      <button>Poručite</button>
    </div>
  )
}

export default OrderSummary
