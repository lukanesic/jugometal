import React from 'react'
import OrderSummary from '../OrderSummary'

const Order = () => {
  return (
    <div className='order'>
      <h5>Kontakt informacije </h5>

      <div className='order-form'>
        <div className='order-form-ctr'>
          <div>
            <label htmlFor='ime'>
              Ime <span>*</span>
            </label>
            <input type='text' id='ime' placeholder='Ime' required />
          </div>
          <div>
            <label htmlFor='prezime'>
              Prezime <span>*</span>
            </label>
            <input type='text' id='prezime' placeholder='Prezime' required />
          </div>
        </div>
        <div className='order-form-ctr'>
          <div>
            <label htmlFor='broj'>
              Broj Telefona <span>*</span>
            </label>
            <input type='text' id='broj' placeholder='Broj Telefona' required />
          </div>
          <div>
            <label htmlFor='email'>
              Email Adresa <span>*</span>
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email Adresa'
              required
            />
          </div>
        </div>
        <div className='order-form-ctr'>
          <div>
            <label htmlFor='adresa'>
              Adresa <span>*</span>
            </label>
            <input type='text' id='adresa' placeholder='Adresa' required />
          </div>
          <div>
            <label htmlFor='postal'>
              Poštanski broj <span>*</span>
            </label>
            <input
              type='text'
              id='postal'
              placeholder='Poštanski broj'
              required
            />
          </div>
        </div>
        <div className='order-form-ctr'>
          <div>
            <label htmlFor='grad'>
              Grad <span>*</span>
            </label>
            <input type='text' id='grad' placeholder='Grad' required />
          </div>
        </div>
      </div>

      <OrderSummary />
    </div>
  )
}

export default Order
